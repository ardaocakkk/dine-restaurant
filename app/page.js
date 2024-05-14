"use client";
import heroBgMobile from "../public/homepage/hero-bg-mobile@2x.jpg"
import heroBgTablet from "../public/homepage/hero-bg-tablet@2x.jpg"
import heroBgDesktop from "../public/homepage/hero-bg-desktop@2x.jpg"
import Image from "next/image";
import dine from "../public/logo.svg"
import enjoyablePlaceMobile from "../public/homepage/enjoyable-place-mobile.jpg"
import enjoyablePlaceDesktop from "../public/homepage/enjoyable-place-desktop.jpg"
import enjoyablePlaceTablet from "../public/homepage/enjoyable-place-tablet.jpg"
import HomePageCard from "@/app/ui/cards/HomePageCard";
import locallySourcedMobile from "../public/homepage/locally-sourced-mobile.jpg"
import locallySourcedDesktop from "../public/homepage/locally-sourced-desktop.jpg"
import locallySourcedTablet from "../public/homepage/locally-sourced-tablet.jpg"
import Divider from "@/app/ui/cards/Divider";
import salmonMobile from "../public/homepage/salmon-mobile.jpg"
import salmonDesktop from "../public/homepage/salmon-desktop-tablet.jpg"
import salmonTablet from "../public/homepage/salmon-desktop-tablet.jpg"
import MenuHighlightsItemCard from "@/app/ui/cards/MenuHighlightsItemCard";
import beefMobile from "../public/homepage/beef-mobile.jpg"
import beefDesktop from "../public/homepage/beef-desktop-tablet.jpg"
import beefTablet from "../public/homepage/beef-desktop-tablet.jpg"
import mousseMobile from "../public/homepage/chocolate-mobile.jpg"
import mousseDesktop from "../public/homepage/chocolate-desktop-tablet.jpg"
import mousseTablet from "../public/homepage/chocolate-desktop-tablet.jpg"
import familyGatheringMobile from "../public/homepage/family-gathering-mobile.jpg"
import familyGatheringDesktop from "../public/homepage/family-gathering-desktop.jpg"
import familyGatheringTablet from "../public/homepage/family-gathering-tablet.jpg"
import specilaEventsMobile from "../public/homepage/special-events-mobile.jpg"
import specialEventsDesktop from "../public/homepage/special-events-desktop.jpg"
import specialEventsTablet from "../public/homepage/special-events-tablet.jpg"
import socialEventsMobile from "../public/homepage/social-events-mobile.jpg"
import socialEventsDesktop from "../public/homepage/social-events-desktop.jpg"
import socialEventsTablet from "../public/homepage/social-events-tablet.jpg"
import BookATable from "@/app/ui/cards/Buttons/BookATableButton";
import readyBgMobile from "../public/homepage/ready-bg-mobile.jpg"
import readyBgDesktop from "../public/homepage/ready-bg-desktop.jpg"
import readyBgTablet from "../public/homepage/ready-bg-tablet.jpg"
import Footer from "@/app/ui/Layout/Footer";
import {useEffect, useState} from "react";
import {ready} from "next/dist/build/output/log";
import Header from "@/app/ui/Layout/Header";



export default function Home() {

    const [deviceSize, setDeviceSize] = useState('');
    const [heroBg, setHeroBg] = useState();
    const [enjoyablePlace, setEnjoyablePlace] = useState();
    const [locallySourced, setLocallySourced] = useState();
    const [salmon, setSalmon] = useState();
    const [beef, setBeef] = useState();
    const [mousse, setMousse] = useState();
    const [specialEvents, setSpecialEvents] = useState();
    const [socialEvents, setSocialEvents] = useState();
    const [familyGathering, setFamilyGathering] = useState();
    const [readyBg, setReadyBg] = useState();
    const [tabOrder, setTabOrder] = useState(0);


    function toggleTab(num) {
        setTabOrder(num);
        console.log(num)
    }

    useEffect(() => {
        function handleResize() {
            // Determine device size here (e.g., based on window.innerWidth)
            const width = window.innerWidth;
            if (width >= 1024) {

                setDeviceSize('large');
                setHeroBg(heroBgDesktop);
                setEnjoyablePlace(enjoyablePlaceDesktop);
                setLocallySourced(locallySourcedDesktop);
                setSalmon(salmonDesktop);
                setBeef(beefDesktop);
                setSpecialEvents(specialEventsDesktop);
                setSocialEvents(socialEventsDesktop)
                setMousse(mousseDesktop);
                setFamilyGathering(familyGatheringDesktop);
                setReadyBg(readyBgDesktop);
            }else if(width <1024 && width >= 768){
                setDeviceSize('medium');
                setHeroBg(heroBgTablet);
                setEnjoyablePlace(enjoyablePlaceTablet);
                setLocallySourced(locallySourcedTablet);
                setSalmon(salmonTablet);
                setBeef(beefTablet);
                setMousse(mousseTablet);
                setSpecialEvents(specialEventsTablet);
                setSocialEvents(socialEventsTablet)
                setFamilyGathering(familyGatheringTablet);
                setReadyBg(readyBgTablet);
            }
            else {
                setDeviceSize('small');
                setHeroBg(heroBgMobile);
                setEnjoyablePlace(enjoyablePlaceMobile);
                setLocallySourced(locallySourcedMobile);
                setSalmon(salmonMobile);
                setBeef(beefMobile);
                setMousse(mousseMobile);
                setSocialEvents(socialEventsMobile);
                setSpecialEvents(specilaEventsMobile);
                setFamilyGathering(familyGatheringMobile);
                setReadyBg(readyBgMobile);
            }
        }

        // Initial call to handleResize
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
      <>
    <div className={'relative lg:overflow-x-hidden lg:overflow-y-hidden'}>
        {deviceSize === 'large' && <Image className={''} src={heroBgDesktop} alt={'herobg desktop'}/> }
        {deviceSize === 'medium' && <Image src={heroBgTablet} alt={'herobg tablet'}/> }
        {deviceSize === 'small' && <Image src={heroBgMobile} alt={'herobg mobile'}/> }
        {/*Overlay elements*/}
        <Header img={dine} />
        <div className={" max-w-screen flex flex-col  "}>
            <div className={'relative bottom-20'}>
                <div className={' hidden md:block '}>
                    <div className={'baver_rectangle mt-3 '}></div>
                    <div className={'baver_rectangle mt-6'}></div>
                    <div className={'baver_rectangle mt-9'}></div>
                    <div className={'baver_rectangle mt-12'}></div>
                    <div className={'baver_rectangle mt-15'}></div>
                    <div className={'baver_rectangle mt-18'}></div>
                </div>
                <div className={'hidden md:block home_rectangle_top'}>
                </div>

        <HomePageCard
         png = {enjoyablePlace}
            alt = {"enjoyable place"}
         title1 = {"Enjoyable place"}
         title2 = {"for all the family."}
            description = {"Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."}
        />
            </div>
            <div className={'hidden md:block home_rectangle_bottom'}>
            </div>
            <HomePageCard
                png = {locallySourced}
                alt = {"locally sourced"}
                title1 = {"The most locally"}
                title2 = {"sourced food."}
                reversed = {true}
                description = {"All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."}
            />
        </div>

    </div>
          <div className={'max-w-screen  h-fit bg-codGray mt-[90.5px] text-white md:ml-[123px] lg:m-0 lg:max-w-screen '}>
              <div className={'flex justify-center mx-[24px] pt-[82.5px]'}>
                  <Divider/>
              </div>
                <div className={'flex flex-col justify-center mx-4 pt-[82.5px]'}>
                    <h1 className={'headingL text-center md:w-[445px] md:h-[96px] mx-auto'}>A few highlights from our menu</h1>
                    <div className={'text-center max-w-screen  mt-[13px] md:w-[445px] md:h-[90px] mx-auto'}>
                        <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
                    </div>
                    <MenuHighlightsItemCard
                      title = {"Seared Salmon Fillet"}
                      img = {salmon}
                        alt = {"salmon"}
                      description = {"Our locally sourced salmon served \n" +
                          "with a refreshing buckwheat summer salad."}
                    />
                    <Divider/>
                    <MenuHighlightsItemCard
                        title = {"Rosemary Filet Mignon"}
                        img = {beef}
                        alt = {"beef"}
                        description = {"Our prime beef served to your taste with a delicious choice of seasonal sides."}/>
                    <Divider/>
                    <MenuHighlightsItemCard
                        title = {"Summer Fruit Chocolate Mousse"}
                        img = {mousse}
                        alt = {"mousse"}
                        description = {"Creamy mousse combined with summer fruits and dark chocolate shavings."}
                    />

                </div>
          </div>
          <div className={'w-full h-fit md:mt-[167px] lg:mb-[160px] lg:max-w-screen-xl lg:mx-auto'}>
              <div className={'family_gathering_rectangle hidden md:block lg:m-0'}></div>
              <div className={'mt-[90.5px] lg:flex lg:mx-auto  '}>
                  {tabOrder === 0 && <Image src={familyGathering} className={"mx-auto"} alt={"family gathering"}/>}
                  {tabOrder === 1 && <Image src={specialEvents} className={"mx-auto"} alt={"special events"}/>}
                    {tabOrder === 2 && <Image src={socialEvents} className={"mx-auto"} alt={"social events"}/>}
                  <div className={'text-center mt-[49px] lg:text-start'}>
                      <div className={'flex flex-col md:flex-row justify-between mx-[40px] lg:hidden'}>
                      <div className={'my-auto'}>
                      <button onClick={() => toggleTab(0)} ><h1 className={`headingS ${tabOrder === 0 ? '' : 'text-shuttleGray'} `}>FAMILY GATHERING</h1></button>
                      <div className={`w-1/3 border-b border-b-beaver mx-auto ${tabOrder === 0 ? 'block' : 'hidden'}`}></div>
                      </div>
                          <div className={'my-auto'}>
                          <button onClick={() => toggleTab(1)} > <h1 className={`headingS ${tabOrder === 1 ? '' : 'text-shuttleGray'} `}>SPECIAL EVENTS</h1></button>
                          <div className={`w-1/3 border-b border-b-beaver mx-auto ${tabOrder === 1 ? 'block' : 'hidden'}`}></div>
                          </div>
                          <div className={'my-auto'}>
                      <button onClick={() => toggleTab(2)} ><h1 className={`headingS ${tabOrder === 2 ? '' : 'text-shuttleGray'} `}>SOCIAL EVENTS</h1></button>
                              <div className={`w-1/3 border-b border-b-beaver mx-auto ${tabOrder === 2 ? 'block' : 'hidden'}`}></div>
                          </div>
                      </div>
                      <div className={'mt-7'}>
                          {tabOrder === 0 &&
                              <>
                              <h1 className={'headingL '}>Family Gathering</h1>
                              <div className={`mt-3 md:w-[457px] md:h-[90px] md:mx-auto  `}>
                          <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
                      </div>
                              </>
                          }
                          {tabOrder === 1 &&
                              <>
                                  <h1 className={'headingL '}>Special Events</h1>
                                  <div className={'mt-3 md:w-[457px] md:h-[90px] md:mx-auto'}>
                                      <p>Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.</p>
                                  </div>
                              </>
                          }
                          {tabOrder === 2 &&
                              <>
                                  <h1 className={'headingL '}>Social Events</h1>
                                  <div className={'mt-3 md:w-[457px] md:h-[90px] md:mx-auto'}>
                                      <p>Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.</p>
                                  </div>
                              </>
                          }
                          <div className={'mb-[128px]'}>
                          <BookATable
                           marginTop={"mt-[27px]"}
                          />
                              <div className={'flex-col md:flex-row justify-between  hidden lg:block lg:mt-[60px]'}>
                                  <div className={'mt-4 flex-col'}>
                                      <div>
                                     <button onClick={() => toggleTab(0)}> <h1 className={`headingS ${tabOrder === 0 ? '' : 'text-shuttleGray'} `}>FAMILY GATHERING</h1></button>
                                      <div className={`w-2/3 border-b border-b-beaver ${tabOrder === 0 ? 'block' : 'hidden'}`}></div>
                                      </div>
                                      <div className={'mt-[12px]'}>
                                  <button onClick={() => toggleTab(1)}><h1 className={`headingS ${tabOrder === 1 ? '' : 'text-shuttleGray'} `}>SPECIAL EVENTS</h1></button>
                                          <div className={`w-2/3 border-b border-b-beaver ${tabOrder === 1 ? 'block' : 'hidden'}`}></div>
                                      </div>
                                      <div className={'mt-3'}>
                                  <button onClick={() => toggleTab(2)}><h1 className={`headingS ${tabOrder === 2 ? '' : 'text-shuttleGray'} `}>SOCIAL EVENTS</h1></button>
                                          <div className={`w-2/3 border-b border-b-beaver ${tabOrder === 2 ? 'block' : 'hidden'}`}></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <Footer img={readyBg}/>
      </>
  );
}
