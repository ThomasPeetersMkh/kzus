<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PersonRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=PersonRepository::class)
 */
class Person
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstname;

    /**
     * @ORM\ManyToMany(targetEntity=School::class, mappedBy="person_id")
     */
    private $school_id;

    /**
     * @ORM\OneToMany(targetEntity=Product::class, mappedBy="person_id")
     */
    private $products;

    public function __construct()
    {
        $this->school_id = new ArrayCollection();
        $this->products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * @return Collection<int, School>
     */
    public function getSchoolId(): Collection
    {
        return $this->school_id;
    }

    public function addSchoolId(School $schoolId): self
    {
        if (!$this->school_id->contains($schoolId)) {
            $this->school_id[] = $schoolId;
            $schoolId->addPersonId($this);
        }

        return $this;
    }

    public function removeSchoolId(School $schoolId): self
    {
        if ($this->school_id->removeElement($schoolId)) {
            $schoolId->removePersonId($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->setPersonId($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getPersonId() === $this) {
                $product->setPersonId(null);
            }
        }

        return $this;
    }
}
