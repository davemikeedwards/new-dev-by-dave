import Router from "next/router";
import { AppLinkButton, BasicButton } from "../components/interactive";
import {
  AppBackground,
  InnerMargins,
  OuterShellPadding,
} from "../components/layout";
import { HeaderText, LogoText, ParagraphText } from "../components/text";

export default function Home() {
  return (
    <>
      {/* DESKTOP SITE */}
      <div className="hidden lg:block">
        <AppBackground>
          <OuterShellPadding>
            <div className="flex w-full justify-end">
              <div className="p-3 mr-2 mt-2 bg-gray-700 rounded-lg -rotate-12">
                <LogoText className="text-gray-300 transform rotate-12">
                  De
                </LogoText>
              </div>
            </div>
            <InnerMargins>
              <div>
                <ParagraphText className="text-gray-600">
                  Hey there! My name is
                </ParagraphText>
              </div>
              <div>
                <HeaderText className="text-gray-700 font-light -ml-0.5 mb-4">
                  David Edwards.
                </HeaderText>
              </div>
              <div>
                <HeaderText className="text-gray-500">
                  Welcome to my personal space.
                </HeaderText>
              </div>
              <div className="flex w-full justify-end">
                <div className="w-1/2 text-right">
                  <ParagraphText className="text-gray-700">
                    I'm a front-end software developer based in Wrexham, North
                    Wales. My current position at{" "}
                    <a
                      className="text-purple-600 hover:text-purple-900 cursor-pointer"
                      href="https://www.roiltd.co.uk/"
                      target="_blank"
                    >
                      Return on Investment
                    </a>{" "}
                    has me working with my favoured frameworks and libraries,
                    React, NextJS, TailwindCSS and more.
                  </ParagraphText>
                  <div className="w-full flex justify-end mt-6">
                    <BasicButton onClick={() => Router.push("/cv")}>
                      VIEW MY CV
                    </BasicButton>
                  </div>
                </div>
              </div>
              <div className="bg-white absolute group p-4 transform -rotate-12 -mt-14 shadow-lg hover:shadow-2xl hover:-rotate-3 hover:-mt-24 duration-300 text-center w-max">
                <img alt="me" className="h-72 mb-4" src="/images/Dave.jpg" />
                <div className="text-black font-hand items-end justify-center flex text-3xl">
                  <div className="pr-16 -ml-2">Dave</div>
                  <div className="text-base -mr-28">circa 2015</div>
                </div>
              </div>
              <div className="flex justify-end mt-16 pl-32 pr-12">
                <div className="w-1/2 text-center">
                  <ParagraphText className="text-gray-700 border-b border-gray-300 drop-shadow">
                    Check Out Some Apps
                  </ParagraphText>
                  <div className="mt-4">
                    <div className="grid grid-cols-3 gap-x-3 gap-y-4">
                      <AppLinkButton
                        className="bg-blue-600 bg-opacity-30"
                        onClick={() => Router.push("/pokemon")}
                      >
                        <img
                          alt="app"
                          className="h-9"
                          src="/images/pokemon/pokemon-logo.png"
                        />
                      </AppLinkButton>
                      <AppLinkButton onClick={() => {}}>
                        COMING SOON
                      </AppLinkButton>
                      <AppLinkButton onClick={() => {}}>
                        COMING SOON
                      </AppLinkButton>
                      <AppLinkButton onClick={() => {}}>
                        COMING SOON
                      </AppLinkButton>
                      <AppLinkButton onClick={() => {}}>
                        COMING SOON
                      </AppLinkButton>
                      <AppLinkButton onClick={() => {}}>
                        COMING SOON
                      </AppLinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </InnerMargins>
          </OuterShellPadding>
        </AppBackground>
      </div>
      {/* MOBILE SITE */}
      <div className="block lg:hidden">
        <AppBackground>
          <OuterShellPadding>
            <div className="grid grid-cols-3 md:grid-cols-8 w-full">
              <div className="text-center col-span-2 md:col-span-3">
                <div>
                  <ParagraphText className="text-gray-600 override font-normal font-space text-sm md:text-base">
                    Hey there! My name is
                  </ParagraphText>
                </div>
                <div>
                  <HeaderText className="text-gray-700 font-light mb-1 override font-roboto text-lg md:text-xl">
                    David Edwards.
                  </HeaderText>
                </div>
              </div>
              <div className="hidden md:block md:col-span-4" />
              <div className="relative justify-self-end mr-12">
                <div className="p-2 mr-2 mt-2 absolute bg-gray-700 rounded-lg -rotate-12">
                  <LogoText className="text-gray-300 text-sm font-light font-roboto override transform rotate-12">
                    De
                  </LogoText>
                </div>
              </div>
            </div>
            <div>
              <HeaderText className="text-gray-500 override mt-2 md:mt-4 text-2xl md:text-3xl text-center ease-in font-extralight font-roboto">
                Welcome to my personal space.
              </HeaderText>
            </div>
            <div className="w-full grid grid-cols-2 justify-center items-center mt-12">
              <div className="flex justify-center">
                <div className="bg-white p-2 transform -rotate-6 shadow-lg text-center w-max">
                  <img
                    alt="me"
                    className="w-28 md:w-52"
                    src="/images/Dave.jpg"
                  />
                  <div className="text-black -mb-1 font-hand text-center text-lg">
                    <div>Dave</div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <BasicButton onClick={() => Router.push("/cv")}>
                  VIEW MY CV
                </BasicButton>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <div className="w-5/6 text-center">
                <ParagraphText className="text-gray-700 border-b border-gray-300 drop-shadow">
                  Check Out Some Apps
                </ParagraphText>
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                    <AppLinkButton
                      className="bg-blue-600 bg-opacity-30"
                      onClick={() => Router.push("/pokemon")}
                    >
                      <img
                        alt="app"
                        className="h-8"
                        src="/images/pokemon/pokemon-logo.png"
                      />
                    </AppLinkButton>
                    <AppLinkButton onClick={() => {}}>
                      COMING SOON
                    </AppLinkButton>
                    <AppLinkButton onClick={() => {}}>
                      COMING SOON
                    </AppLinkButton>
                    <AppLinkButton onClick={() => {}}>
                      COMING SOON
                    </AppLinkButton>
                    <AppLinkButton onClick={() => {}}>
                      COMING SOON
                    </AppLinkButton>
                    <AppLinkButton onClick={() => {}}>
                      COMING SOON
                    </AppLinkButton>
                  </div>
                </div>
              </div>
            </div>
          </OuterShellPadding>
        </AppBackground>
      </div>
    </>
  );
}
