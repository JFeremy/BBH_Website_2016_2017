<!-- blog_BEGIN -->
<?php
if (isset($_GET['blog']))
    { $blog_lien = $_GET['blog']; }
else
    { $blog_lien = "/blog/index.php"; }

?>
<div class="row">
    <iframe id="mon_iframe" name="FilInfo"  src="<?php echo $blog_lien ?>" class="autoHeight" width="100%" style="min-height: 1000px;"></iframe>
</div>
<!-- blog_END -->
