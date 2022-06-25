<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Entity\Product;
use App\Entity\School;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController {

  /**
   * @Route("/admin", name="admin")
   */
  public function index(): Response {
    return parent::index();
  }

  public function configureDashboard(): Dashboard {
    return Dashboard::new()
      ->setTitle('Backend');
  }

  public function configureMenuItems(): iterable {
    $roles = $this->getUser()->getRoles();
    yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
    yield MenuItem::linkToCrud('Products', 'fa fa-sticky-note', Product::class);
    if (in_array("ROLE_SUPER_ADMIN", $roles)) {
      yield MenuItem::linkToCrud('Categories', 'fa fa-sliders', Category::class);
      yield MenuItem::linkToCrud('Schools', 'fa fa-building', School::class);
    }
  }

}
