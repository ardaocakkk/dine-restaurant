"use client";
import heroBgMobile from "../public/homepage/hero-bg-mobile@2x.jpg"
import heroBgTablet from "../public/homepage/hero-bg-tablet.jpg"
import heroBgDesktop from "../public/homepage/hero-bg-desktop.jpg"
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
import BookATable from "@/app/ui/cards/Buttons/BookATableButton";
import readyBgMobile from "../public/homepage/ready-bg-mobile.jpg"
import readyBgDesktop from "../public/homepage/ready-bg-desktop.jpg"
import readyBgTablet from "../public/homepage/ready-bg-tablet.jpg"
import Footer from "@/app/ui/Layout/Footer";
import {useEffect, useState} from "react";
import {ready} from "next/dist/build/output/log";


export default function Home() {

    const [deviceSize, setDeviceSize] = useState('');
    const [heroBg, setHeroBg] = useState();
    const [enjoyablePlace, setEnjoyablePlace] = useState();
    const [locallySourced, setLocallySourced] = useState();
    const [salmon, setSalmon] = useState();
    const [beef, setBeef] = useState();
    const [mousse, setMousse] = useState();
    const [familyGathering, setFamilyGathering] = useState();
    const [readyBg, setReadyBg] = useState();
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
    <div className={'relative lg:overflow-x-hidden'}>
        {deviceSize === 'large' && <Image className={''} src={heroBgDesktop} alt={'herobg desktop'}/> }
        {deviceSize === 'medium' && <Image src={heroBgTablet} alt={'herobg tablet'}/> }
        {deviceSize === 'small' && <Image src={heroBgMobile} alt={'herobg mobile'}/> }
        {/*Overlay elements*/}
        <div className={'absolute text-white lg:items-start lg:w-1/3 bg-codGray  z-10 top-0      mt-[220px] md:mt-[374px] w-screen h-fit flex flex-col items-center lg:max-w-screen'}>
            <div className={'mt-5 '}>
                <Image src={dine} alt={"dine logo"} />
            </div>
            <div className={"mt-3 "}>
            <div className={"flex  flex-col   items-center "}>
                <h1 className={"headingXL"}>
                    Exquisite dining
                </h1>
                <h1 className={"headingXL"}>since 1989</h1>
            </div>
                <div className={"text-center mt-[21px] md:w-[573px] md:h-[60px]"}>
                    <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                </div>
                <BookATable
                    marginTop={"mt-[53px]"}
                />
            </div>
            <div>
            </div>
        </div>
        <div className={" max-w-screen flex flex-col"}>
            <div className={'relative bottom-20'}>
                <div className={' hidden md:block'}>
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
            <div className={'hidden md:block home_rectangle_bottom'}>x
            </div>
            <HomePageCard
                png = {locallySourced}
                alt = {"locally sourced"}
                title1 = {"The most locally"}
                title2 = {"sourced food."}
                description = {"All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."}
            />
        </div>

    </div>
          <div className={'max-w-screen h-fit bg-codGray mt-[90.5px] text-white md:ml-[123px] lg:m-0 lg:max-w-screen'}>
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
          <div className={'w-full h-fit md:mt-[167px]'}>
              <div className={'family_gathering_rectangle hidden md:block'}></div>
              <div className={'mt-[90.5px] '}>
                  <Image src={familyGathering} className={"mx-auto"} alt={"family gathering"}/>
                  <div className={'text-center mt-[49px]'}>
                      <div className={'flex flex-col md:flex-row justify-between mx-[40px]'}>
                      <div className={'mt-4'}>
                      <h1 className={'headingS'}>FAMILY GATHERING</h1>
                      <div className={'w-1/3 border-b border-b-beaver mx-auto'}></div>
                      </div>
                          <h1 className={'headingS mt-4 text-shuttleGray'}>SPECIAL EVENTS</h1>
                      <h1 className={'headingS mt-4 text-shuttleGray'}>SOCIAL EVENTS</h1>
                      </div>
                      <div className={'mt-7'}>
                          <h1 className={'headingL '}>Family Gathering</h1>
                          <div className={'mt-3 md:w-[457px] md:h-[90px] md:mx-auto'}>
                              <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
                          </div>
                          <div className={'mb-[128px]'}>
                          <BookATable
                           marginTop={"mt-[27px]"}
                          />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer
           img = {readyBg}
          />
      </>
  );
}
