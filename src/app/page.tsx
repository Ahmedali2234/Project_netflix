import Image from "next/image";
import FAQComponent from "./component/FAQComponent";
import { faqData } from "./Data/FAQ";


const HomePage = () => {
    return (
        //header Section
        <section className="bg-cover bg-center lg:h-screen md:h-[640px] h-[50em] " style={{ backgroundImage: "url('/images/hero2.jpg')" }}>
            <div className="h-full mx-auto bg-[rgba(0,0,0,0.5)]">
                <header className="max-w-[1170px] mx-auto">
                    <div className="grid grid-cols-2 items-center justify-end  ">
                        <figure>
                            <Image src={'/images/netlogo.jpg'} width={200} height={200} alt="Netflix" />
                        </figure>
                        <div className="text-right  px-2">
                            <button className="bg-red-600 py-1 px-3 rounded text-slate-200 item-center">Sign in</button>
                        </div>
                    </div>
                </header>

                <div className="max-w-full sm:pt-[150px] pt-[120px] py[35px] text-center text-white ">
                    <h1 className=" font-bold sm:text-[45px] text-[35px]">Unlimited movies, TV shows, and more</h1>
                    <h2 className=" text-[20px] py-[12px]">Watch anywhere. Cancel anytime.</h2>
                    <h4 className="text-[18px]">Ready to watch? Enter your email to create or restart your membership.</h4>
                </div>

                <div className="max-w-[700px] mx-auto sm:px-[80px] px-[50px] mt-6">
                    <form action="" className="grid  sm:grid-cols-[70%_auto] grid-cols-1 gap-[15px]">
                        <input type="text" className="border-[2px] border-[#776a6a] bg-transparent rounded h-[50px] pl-[20px] bg-[]rgba(0,0,0.5)" placeholder="Email address" />
                        <button className="bg-red-600  rounded text-xl hover:bg-red-700 duration-300 font-medium text-white sm:h-[50px] h-[50px]">Get Started  </button>
                    </form>
                </div>
            </div>

            {/*hero2 Section*/}

            <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[100px] py-[50px] ">
                <div className="max-w-[1170px] mx-auto ">
                    <div className="grid sm:grid-cols-2 grid-cols-1 items-center px-2">
                        <div className="text-white ">
                            <h2 className="sm:text-[50px] text-[35px] sm:text-left text-center font-bold">Enjoy on your TV</h2>
                            <p className="sm:text-[25px] text-[20px] sm:text-left text-center pt-[25px]">Watch on Smart TVs, Playstation, Xbox, Chromecast,  Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <figure className="relative">
                            <video className="absolute sm:w-[62%] w-[72%] sm:left-[12%] left-[14%] bottom-[25%] z-[1] "
                                src="/images/video1.m4v"></video>
                            <Image className="relative z-[2]" src={"/images/tv.jpg"} alt="neflix tv" height={500} width={500}></Image>
                        </figure>
                    </div>
                </div>
            </section>



            <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[100px] py-[50px] ">
                <div className="max-w-[1170px] mx-auto ">
                    <div className="grid sm:grid-cols-2 grid-cols-1 items-center px-2">
                        <figure className="relative sm:order-1 order-2">
                            <Image src="/images/mobile.jpg" alt="" height={"1000"} width={'1000'}/>
                            <div className="sm:w-[60%] w-[90%] absolute sm:left-[20%] left-[5%] border-[1px] rounded-[9px] bottom-[10px]
                             border-[#ccc] grid grid-cols-[70%_auto] bg-black items-center">
                                <div className="grid grid-cols-[25%_auto] gap-[10px] p-[10px] items-center ">
                                    <Image src="/images/boxshot.png" alt="" height={"100"} width={'100'}/>
                                    <div className="text-white">
                                        <h3 className="font-bold">stranger Things</h3>
                                        <span className="text-blue-500">Downloading...</span>
                                    </div>
                                </div>
                                <div>
                                    <Image src="/d.gif" alt="" height={"1000"} width={'1000'}/>
                                </div>

                            </div>
                        </figure>
                        <div className="text-white sm:order-2 order">
                            <h2 className="sm:text-[50px] text-[35px] sm:text-left text-center font-bold leading-[60px]">Download your shows to watch offline</h2>
                            <p className="sm:text-[25px] text-[20px] sm:text-left text-center pt-[25px]">Save your favorites easily and always have something to watch..</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[100px] py-[50px] ">
                <div className="max-w-[1170px] mx-auto ">
                    <div className="text-white">
                        <h2 className="sm:text-[50px] text-[35px] sm:text-left text-center font-bold leading-[50px]">Watch <br /> everywhere</h2>
                        <p className="sm:text-[25px] text-[20px] sm:text-left text-center pt-[25px] leading-[30px]">Stream unlimited movies and TV <br /> shows on your phone, tablet, laptop,<br /> and TV.</p>
                    </div>
                </div>
            </section>


            <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[100px] py-[50px] ">
                <div className="max-w-[1170px] mx-auto ">
                    <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
                        <div className="sm:order-1 order-2">
                            <Image src="/images/kids.png" alt="Kids" height={"1000"} width={'1000'}/>
                        </div>
                        <div className="text-white sm:order-2 order-1">
                            <h2 className="sm:text-[50px] text-[32px] sm:text-left text-center font-bold leading-[50px]">Create profiles for kids</h2>
                            <p className="sm:text-[25px] text-[19px] sm:text-left text-center pt-[25px] leading-[30px]">
                                Send kids on adventures with their favorite characters in a space made just for them free with your membership</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[80px] py-[50px]">
                <div className="max-w-[1170px] mx-auto px-[15px]">
                    <h2 className="sm:text-[50px] text-[40px] font-bold text-white text-center pb-20">frequently Asked Questions</h2>

                    <div className='mb-10'>
                        {faqData.map((item, index) => {
                            const { title, desc } = item;
                            return (
                                <FAQComponent key={index} title={title} desc={desc} />
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="bg-black">
                <div className=' container mx-auto max-w-6xl lg:py-20 md:py-20 py-10 px-5 '>
                    <p className='text-gray-300 mb-5'>Questions? Call <span className=' underline'>000-800-919-1694</span></p>
                    <div className="text-gray-300 flex flex-wrap justify-between mb-4 cursor-pointer">
                        <div className="1">
                            <ul className='underline'>
                                <li className='mb-3'>FAQ</li>
                                <li className='mb-3'>Investor Relations</li>
                                <li className='mb-3'>Privacy</li>
                                <li className='mb-3'>Speed Test</li>
                            </ul>
                        </div>
                        <div className="2">
                            <ul className='underline'>
                                <li className='mb-3'>Help Centre</li>
                                <li className='mb-3'>Jobs</li>
                                <li className='mb-3'>Cookie Preferences</li>
                                <li className='mb-3'>Legal Notices</li>
                            </ul>
                        </div>
                        <div className="3">
                            <ul className='underline'>
                                <li className='mb-3'>Account</li>
                                <li className='mb-3'>Ways to Watch</li>
                                <li className='mb-3'>Corporate Information</li>
                                <li className='mb-3'>Only on Netflix</li>
                            </ul>
                        </div>
                        <div className="4">
                            <ul className='underline'>
                                <li className='mb-3'>Media Centre</li>
                                <li className='mb-3'>Terms of Use</li>
                                <li className='mb-3'>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className=" bg-[#111112] text-white lg:px-5 md:px-5 px-3 py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80 w-28 mb-5 ">
                        <select
                            name=""
                            id=""
                            className=' bg-transparent outline-none '
                        >
                            <option value="English">English</option>
                            <option value="हिन्दी">URDU</option>
                        </select>
                    </div>
                    <p className='text-gray-300'>Netflix Pakistan</p>
                </div>
            </section>
        </section>

    );
};






export default HomePage;
