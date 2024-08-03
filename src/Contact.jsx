import twitter from '/img/twitter.png'
import mail from '/img/mail.png'
import instagram from '/img/instagram.png'
import github from '/img/github.png'
function Contact() {
    return (
        <div class="backdrop-blur-xl ">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div class="col-start-1 col-end-4">
                    <div class="px-[100px] py-10">
                        <div class="text-[50px] text-gray-100">
                            Want to Know
                        </div>
                        <div class="text-[50px] text-gray-100">
                            about us ?
                        </div>
                        <div class="text-[25px] text-gray-100">
                            Join Our Community The Web Wizards
                        </div>
                        <div class="py-10 text-[20px] text-gray-100">
                            OUTR (CET Campus), Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha. 
                        </div>
                    </div>
                </div>
                <div class="col-span-1 px-10 py-[30px]">
                    <div class="grid grid-rows-2 max-w-[200px] ">
                        <div class="grid grid-cols-4 gap-5 ">
                            <div class="cols-span-1 min-w-[50px] ">
                                <img src={twitter}></img>
                            </div>
                            <div class="cols-span-1 min-w-[50px]">
                            <button onClick={() => { window.location="https://gmail.com" }} ><img src={mail}></img></button>
                            </div>
                            <div class="cols-span-1 min-w-[50px]">
                                <img src={instagram}></img>
                            </div>
                            <div class="cols-span-1 min-w-[50px]">
                                <button onClick={() => { window.location="https://github.com/RyuvicSirville" }} ><img src={github}></img></button>
                            </div>
                            <div class="py-12 col-span-4 text-[20px] text-gray-100">
                                Powered By 
                                <p>THE WEB WIZARDS</p>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact 