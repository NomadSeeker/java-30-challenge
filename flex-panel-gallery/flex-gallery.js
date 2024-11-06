const panels = [...document.querySelectorAll('.panel')];
    console.log(panels);

    function showPanel(e) {
        console.log(this);
        this.classList.toggle('open');
        // e.target.classList;
    }

    function toggleActive(e) {
        if(e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }

    panels.forEach(panel => {
        panel.addEventListener('click', showPanel);
    });

    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));