<?php

/**
 * Template Name: Search Page
 *
 * @package OceanWP WordPress theme
 */

?>

<?php get_header(); ?>

<div id="content-wrap" class="container-fluid clr px-0 hc-ff-roboto search--page">
    <div class="content-area clr">
        <section class="search--header pt-4 pb-5">
            <div class="container px-0 text-dark hc-fw-400">
                <div>
                    <div class="mb-3">
                        <span class="hc-fs-36">You searched for: </span>
                        <span class="searched-term hc-fs-36 hc-fw-700 hc-color-secondary"><?= isset($_GET['q']) ? $_GET['q'] : ""; ?></span>
                    </div>
                    <div class="align-items-end justify-content-start search-input--wrapper">
                        <span>Displaying <span class="total--result hc-fw-700">0 results</span> / New search: </span>
                        <span class="search-input--container">
                            <input type="text" value="" name="search-input" class="w-100" />
                            <button class="search--btn">⌕</button>
                        </span>
                    </div>
                </div>
                <div class="d-flex align-items-end">
                    <span class="text-uppercase hc-fw-300" style="min-width: 75px;">SORT BY:</span>
                    <select name="sort_by" class="form-control ml-auto hc-fw-400 hc-fs-20">
                        <option value="most_recent">Most Recent</option>
                    </select>
                </div>
            </div>
        </section>
        <section class="mob-filter">
            <div class="container">
                <div class="mob-filter-content"><i class="fas fa-sliders-h"></i> Filter Search for better results</div>
            </div>
        </section>
        <section class="search--body pt-4 pb-5">
            <div class="container px-0 text-dark hc-fw-400">
                <div>
                    <ul class="nav d-flex flex-nowrap align-items-center justify-content-start document-type-tabs mb-5">
                        <li class="nav-item flex-grow-1 p-0">
                            <a class="nav-link d-block w-100 active text-center pb-3" href="#all">All</a>
                        </li>
                        <li class="nav-item flex-grow-1 p-0">
                            <a class="nav-link d-block w-100 text-center pb-3" href="#articles">Articles</a>
                        </li>
                        <li class="nav-item flex-grow-1 p-0">
                            <a class="nav-link d-block w-100 text-center pb-3" href="#events">Events</a>
                        </li>
                        <li class="nav-item flex-grow-1 p-0">
                            <a class="nav-link d-block w-100 text-center pb-3" href="#news">News</a>
                        </li>
                        <li class="nav-item flex-grow-1 p-0">
                            <a class="nav-link d-block w-100 text-center pb-3" href="#softwares">Softwares</a>
                        </li>
                        <li class="nav-item flex-grow-1 p-0">
                            <a class="nav-link d-block w-100 text-center pb-3" href="#companies">Companies</a>
                        </li>
                    </ul>
                    <div class="search--results">
                        <div class="document-type-panels">
                            <div id="all-panel" class="document-type-panel active"></div>
                            <div id="articles-panel" class="document-type-panel">Articles</div>
                            <div id="events-panel" class="document-type-panel">Events</div>
                            <div id="news-panel" class="document-type-panel">News</div>
                            <div id="softwares-panel" class="document-type-panel">Softwares</div>
                            <div id="companies-panel" class="document-type-panel">Companies</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="search--filters">
                        <div class="filter--wrapper mb-5" data-filter="business_sectors">
                            <div class="filter-title text-uppercase hc-fs-23 hc-fw-400">Filter by Sector</div>
                            <div class="filter--body">
                                <ul class="d-flex flex-column py-3">

                                    <?php

                                     echo return_taxonomylist('business_sector');
                                    ?>


                                </ul>
                            </div>
                        </div>

                        <div class="filter--wrapper mb-5" data-filter="domains">
                            <div class="filter-title text-uppercase hc-fs-23 hc-fw-400">Filter by Domain</div>
                            <div class="filter--body">
                                <ul class="d-flex flex-column py-3">

                                    <?php
                                        echo return_taxonomylist('domain');
                                    ?>


                                </ul>
                            </div>
                        </div>
                        <div class="filter--wrapper mb-5" data-filter="functions">
                            <div class="filter-title text-uppercase hc-fs-23 hc-fw-400">Filter by Functions</div>
                            <div class="filter--body">
                                <ul class="d-flex flex-column py-3">

                                    <?php
                                        echo return_taxonomylist('functions');
                                    ?>


                                </ul>
                            </div>
                        </div>

                        <div class="filter--footer">
                            <div class="d-flex align-items-center justify-content-between">
                                <span><button class="filter--btn apply--btn text-uppercase hc-fw-100 hc-lh-1 px-4 py-3 hc-fs-18">Apply FIlters</button></span>
                                <span><button class="filter--btn clear--btn text-uppercase hc-fw-100 hc-lh-1 px-4 py-3 hc-fs-18">Clear FIlters</button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
<!-- ==================================== -->

<?php get_footer(); ?>