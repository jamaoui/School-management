<?php

namespace App\Enums;

enum BloodEnum: string
{
    case O_PLUS = 'O+';
    case O_MINUS = 'O-';
    case A_PLUS = 'A+';
    case A_MINUS = 'A-';
    case B_PLUS = 'B+';
    case B_MINUS = 'B-';
    case AB_PLUS = 'AB+';
    case AB_MINUS = 'AB-';
}
