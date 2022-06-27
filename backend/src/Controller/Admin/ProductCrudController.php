<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ProductCrudController extends AbstractCrudController {

  public static function getEntityFqcn(): string {
    return Product::class;
  }


  public function createEntity(string $entityFqcn) {
    $product = new Product();
    $actualSchool = "";
    $schools = $this->getUser()->getSchools();
    foreach ($schools as $school) {
      $actualSchool = $school;
    }
    $product->setSchool($actualSchool);
    return $product;
  }


  public function configureFields(string $pageName): iterable {
    $config = [];
    $roles = $this->getUser()->getRoles();

    if (in_array("ROLE_ADMIN", $roles)) {
      $config = [
        TextField::new('name'),
        TextEditorField::new('description'),
        ChoiceField::new('status')->setChoices([
          "Beschikbaar" => 'Beschikbaar',
          "Uitgeleend" => "Uitgeleend",
        ]),
        AssociationField::new('school')->setDisabled(),
        AssociationField::new('categories'),
        AssociationField::new('user'),
        ImageField::new("img_path")
          ->setBasePath("uploads/photos")
          ->setUploadDir("public/uploads/photos")
          ->setUploadedFileNamePattern('[slug]-[timestamp].[extension]'),
      ];
    }
    else {
      $config = [
        TextField::new('name'),
        TextEditorField::new('description'),
        ChoiceField::new('status')->setChoices([
          "Beschikbaar" => 'Beschikbaar',
          "Uitgeleend" => "Uitgeleend",
        ]),
        AssociationField::new('school'),
        AssociationField::new('categories'),
        AssociationField::new('user'),
        ImageField::new("img_path")
          ->setBasePath("uploads/photos")
          ->setUploadDir("public/uploads/photos")
          ->setUploadedFileNamePattern('[slug]-[timestamp].[extension]'),
      ];
    }


    return $config;
  }

}
