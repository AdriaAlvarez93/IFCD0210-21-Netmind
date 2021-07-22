<?php

namespace App\Controllers;

use Core\Controller;
use Core\View;

class StaticController extends Controller
{
    /*
    * ===============================================================
    * Métodos de RENDER de VISTAS ESTÁTICAS (No envian datos al Backend)
    * ===============================================================
    */
    public function renderHome()
    {
        View::renderTwig('static/index.html');
    }
}
