<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ProductRepository::class)
 */
class Product
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
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $status;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $img_path;

    /**
     * @ORM\ManyToOne(targetEntity=School::class, inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $school_id;

    /**
     * @ORM\ManyToOne(targetEntity=Person::class, inversedBy="products")
     */
    private $person_id;

    /**
     * @ORM\ManyToMany(targetEntity=Category::class, inversedBy="products")
     */
    private $cat_id;

    public function __construct()
    {
        $this->cat_id = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getImgPath(): ?string
    {
        return $this->img_path;
    }

    public function setImgPath(string $img_path): self
    {
        $this->img_path = $img_path;

        return $this;
    }

    public function getSchoolId(): ?School
    {
        return $this->school_id;
    }

    public function setSchoolId(?School $school_id): self
    {
        $this->school_id = $school_id;

        return $this;
    }

    public function getPersonId(): ?Person
    {
        return $this->person_id;
    }

    public function setPersonId(?Person $person_id): self
    {
        $this->person_id = $person_id;

        return $this;
    }

    /**
     * @return Collection<int, Category>
     */
    public function getCatId(): Collection
    {
        return $this->cat_id;
    }

    public function addCatId(Category $catId): self
    {
        if (!$this->cat_id->contains($catId)) {
            $this->cat_id[] = $catId;
        }

        return $this;
    }

    public function removeCatId(Category $catId): self
    {
        $this->cat_id->removeElement($catId);

        return $this;
    }
}
