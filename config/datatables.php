<?php
/**
 * Created by PhpStorm.
 * User: csi0n
 * Date: 5/14/17
 * Time: 5:43 PM
 */
return [
    'drive' => 'element',
    'default' => [
        'draw' => 1,
        'start' => 10,
        'length' => 20,
        'searchRegex' => true,
    ],
    'function' => [
        'route' => 'meetingRoute'
    ],
    'emptyData' => [
        'draw' => 0,
        'recordsTotal' => 0,
        'recordsFiltered' => 0,
        'data' => [],
    ]
];