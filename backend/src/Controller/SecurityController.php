<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController {
  /**
   * @Route("/app_json_login", name="app_json_login", methods={"POST"})
   */
  public function login()
  {
    $user = $this->getUser();

    return $this->json([
      'name' => $user->getName(),
      'firstname'=> $user->getFirstname(),
      'type'=>$user->getType()
    ]);
  }

}