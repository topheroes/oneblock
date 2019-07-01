const options = {
    threshold: 0.25
};

const callback = (entries, theObserver)=>{
    entries.forEach((entry)=>{
        console.log(entry, entry.isIntersecting);

        if( entry.isIntersecting){
            entry.target.classList.add("haha");
            theObserver.unobserve();
        }

    });
}


const oberserver = new IntersectionObserver( callback, options);

const blockElem = document.querySelectorAll(".block")[1];

oberserver.observe(blockElem);