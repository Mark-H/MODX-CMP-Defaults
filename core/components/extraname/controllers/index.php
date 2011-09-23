<?php
/**
 * ExtraName
 *
 * Copyright 2011 by Mark Hamstra <business@markhamstra.nl>
 *
 * This file is part of ExtraName, a real estate property listings component
 * for MODX Revolution.
 *
 * ExtraName is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later
 * version.
 *
 * ExtraName is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * ExtraName; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
 * Suite 330, Boston, MA 02111-1307 USA
 *
*/
require_once dirname(dirname(__FILE__)) . '/model/extraname.class.php';
$extraname = new ExtraName($modx);
$extraname->initialize('mgr');

$modx->regClientStartupHTMLBlock('
<script type="text/javascript">
    Ext.onReady(function() {
        ExtraName.config = '.$modx->toJSON($extraname->config).';
    });
</script>');

$modx->regClientStartupScript($extraname->config['js_url'].'mgr/extraname.class.js');

return '<div id="extraname"></div>';
?>