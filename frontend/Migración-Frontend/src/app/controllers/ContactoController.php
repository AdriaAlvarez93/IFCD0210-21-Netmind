<?php

namespace App\Controllers;

use Core\Controller;
use Core\View;

class ContactoController extends Controller
{
    /*
    * ===============================================================
    * Métodos de RENDER de VISTAS 
    * ===============================================================
    */
    public function renderContacto()
    {
        View::renderTwig('contacto/contacto.html');
    }
}
