<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ProductCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Product::class;
    }



    public function configureFields(string $pageName): iterable
    {
        $config = [];
        $roles = $this->getUser()->getRoles();
        if(in_array("ROLE_ADMIN",$roles)){
          $config= [
            TextField::new('name'),
            TextEditorField::new('description'),
            AssociationField::new('school')->setDisabled(),
            AssociationField::new('categories'),
          ];
        }else{
          $config= [
            TextField::new('name'),
            TextEditorField::new('description'),
            AssociationField::new('school'),
            AssociationField::new('categories'),
          ];
        }


        return $config;
    }
}
