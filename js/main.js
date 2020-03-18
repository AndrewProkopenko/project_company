$(document).ready(function(){
    let w, 
        mdlContent = $('.section-three-modal-content'); 
    if($(document).width() < 500) { 
        w = $('.section-three-item').width() + 50; 
    } else { 
        w = $('.section-three-item').width() ; 
    }
    $('.section-three-item').height(w) ;

    let wrapBtn = $('.section-three-wrap a'); 
    $(wrapBtn).click(() => { 
        $('.section-three-modal').fadeIn()
        $('.section-three-modal').css({'display' : 'flex'})
        $('html').css({'overflow' : 'hidden'})
    });
let canc = $('.icon-cancel');
    $('.section-three-modal').click( (event) => { 
        if( event.target != mdlContent[0] && mdlContent.has(event.target).length === 0 ) { 
            $('.section-three-modal').css({'display' : 'none'})
            $('html').css({'overflow' : 'auto'})
            $(document).scrollTop($('.section-three').offset().top - 200);
        }
        // if (event.target = $('#close-modal')) { 
        //     console.log($('#close-modal'))
        //     $('.section-three-modal').css({'display' : 'none'})
        //     $('html').css({'overflow' : 'auto'})
        //     $(document).scrollTop($('.section-three').offset().top - 200);
        // }
        
    });
});
