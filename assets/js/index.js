(function(doc, w){
    let bdClass = doc.body.className,
    zhBtn = doc.getElementById('zh-cn'),
    enBtn = doc.getElementById('en-us');
    
    function setAct(){
        if(!/zh/.test(doc.body.className)) {
            enBtn.className += 'active'
            zhBtn.className = ''
        }else{
            zhBtn.className += 'active'
            enBtn.className = ''
        }
    }
    enBtn.onclick = function(){
        doc.body.className = ''
        setAct()
    }
    zhBtn.onclick = function(){
        doc.body.className += 'zh'
        setAct()
    }
    setAct()
})(document, window)

$(function(){
    function initTabElm(){
        $('h3').each(function(){
            let _this = $(this)
            let blockquote = _this.nextUntil('h3').filter('blockquote')
            let titles = null
            let tab = null
            let _html = ''
            if(blockquote&&blockquote.length){
                titles = blockquote.children('p')
            }else{return}
            if(titles&&titles.length){
                titles.hide()
                tab = $('<ul class="tab"></ul>')
                titles.each(function(index, item){
                    _html += (index == 0 ? '<li class="active">':'<li>')+$(item).html()+'</li>'
                })
                tab.html(_html)
                _this.after(tab)
                initTab(tab.find('li'), blockquote)
            }
        })
    }
    
    function initTab(tabs, contents){
        contents.hide()
        contents.eq(0).show()
        tabs.click(function(){
            let index = $(this).index()
            tabs.removeClass('active')
            contents.hide()
            tabs.eq(index).addClass('active')
            contents.eq(index).show()
        })
    }

    function setHeaderPos(){
        let header = $('header'),
        w = $(window)

        
        if(header.height()+header.offset().top-w.scrollTop() > w.height()) {
            header.addClass('scroll')
        }else{
            header.removeClass('scroll')
        }

    }
    
    let flag = null;
    $('#title').html($('h2').html())
    $(window).resize(function(){
        clearTimeout(flag)
        flag = setTimeout(function(){
            setHeaderPos()
        }, 500);
    })
    initTabElm()
    setTimeout(function(){
        setHeaderPos()
    }, 500);
})