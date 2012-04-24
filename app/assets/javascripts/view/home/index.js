
    jQuery(function($){

      $.supersized({

        // Functionality
        slideshow         : 1,      // Slideshow on/off
        autoplay          : 1,      // Slideshow starts playing automatically
        start_slide       : 1,      // Start slide (0 is random)
        stop_loop         : 0,      // Pauses slideshow on last slide
        random            : 0,      // Randomize slide order (Ignores start slide)
        slide_interval    : 4000,   // Length between transitions
        transition        : 6,      // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed  : 500,    // Speed of transition
        new_window        : 0,      // Image links open in new window/tab
        pause_hover       : 0,      // Pause slideshow on hover
        keyboard_nav      : 1,      // Keyboard navigation on/off
        performance       : 0,      // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
        image_protect     : 1,      // Disables image dragging and right click with Javascript

        // Size & Position
        min_width         : 0,      // Min width allowed (in pixels)
        min_height        : 0,      // Min height allowed (in pixels)
        vertical_center   : 1,      // Vertically center background
        horizontal_center : 1,      // Horizontally center background
        fit_always        : 0,      // Image will never exceed browser width or height (Ignores min. dimensions)
        fit_portrait      : 0,      // Portrait images will not exceed browser height
        fit_landscape     : 0,      // Landscape images will not exceed browser width

        // Components
        slide_links       :  'blank',  // Individual links for each slide (Options: false, 'number', 'name', 'blank')
        thumb_links       :  1,      // Individual thumb links for each slide
        thumbnail_navigation :   1,      // Thumbnail navigation
        slides           :   [     // Slideshow Images

      {image : 'http://pixelthemes.net/flipbook/wp-content/uploads/2011/10/nr-1024x5761.jpg', thumb:'http://pixelthemes.net/flipbook/wp-content/themes/flipbook/includes/timthumb.php?src=http://pixelthemes.net/flipbook/wp-content/uploads/2011/10/nr-1024x5761.jpg&amp;w=80&amp;h=50zc=1&amp;q=100' ,title : 'Welcome to Flipbook', textcolor : '#ffffff',url:'' }
  ,   {image : 'http://pixelthemes.net/flipbook/wp-content/uploads/2011/10/nr2-1024x5761.jpg', thumb:'http://pixelthemes.net/flipbook/wp-content/themes/flipbook/includes/timthumb.php?src=http://pixelthemes.net/flipbook/wp-content/uploads/2011/10/nr2-1024x5761.jpg&amp;w=80&amp;h=50zc=1&amp;q=100' ,title : 'Lorem Ipsum Dolor Sit Amet', textcolor : '#ffffff',url:'http://pixelthemes.net/flipbook/?p=57' }
  ,   {image : 'http://pixelthemes.net/flipbook/wp-content/uploads/2011/10/l.jpg', thumb:'http://pixelthemes.net/flipbook/wp-content/themes/flipbook/includes/timthumb.php?src=http://pixelthemes.net/flipbook/wp-content/uploads/2011/10/l.jpg&amp;w=80&amp;h=50zc=1&amp;q=100' ,title : 'Lorem Ipsum Dolor Sit Amet', textcolor : '#ffffff',url:'' }
  ,   {image : 'http://pixelthemes.net/flipbook/wp-content/uploads/2011/10/6033277098_63f567a96d_b.jpg', thumb:'http://pixelthemes.net/flipbook/wp-content/themes/flipbook/includes/timthumb.php?src=http://pixelthemes.net/flipbook/wp-content/uploads/2011/10/6033277098_63f567a96d_b.jpg&amp;w=80&amp;h=50zc=1&amp;q=100' ,title : 'Lorem Ipsum Dolor Sit Amet', textcolor : '#ffffff',url:'' }
  ,   {image : 'http://pixelthemes.net/flipbook/wp-content/uploads/2011/10/3259556996_4880232445_b1.jpg', thumb:'http://pixelthemes.net/flipbook/wp-content/themes/flipbook/includes/timthumb.php?src=http://pixelthemes.net/flipbook/wp-content/uploads/2011/10/3259556996_4880232445_b1.jpg&amp;w=80&amp;h=50zc=1&amp;q=100' ,title : 'Lorem Ipsum Dolor Sit Amet', textcolor : '#ffffff',url:'' }
  ,   {image : 'http://pixelthemes.net/flipbook/wp-content/uploads/2011/10/6058928284_154573363a_o1.jpg', thumb:'http://pixelthemes.net/flipbook/wp-content/themes/flipbook/includes/timthumb.php?src=http://pixelthemes.net/flipbook/wp-content/uploads/2011/10/6058928284_154573363a_o1.jpg&amp;w=80&amp;h=50zc=1&amp;q=100' ,title : 'Lorem Ipsum Dolor Sit Amet', textcolor : '#ffffff',url:'' }
                        ],
        // Theme Options
        progress_bar      : 1,
        mouse_scrub       : 1

      });
    });

