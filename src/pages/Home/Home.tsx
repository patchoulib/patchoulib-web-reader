import exampleCover1 from "../../assets/example_cover_1.jpg";
import exampleCover2 from "../../assets/example_cover_2.jpg";
import BookHistory from './BookHistory.tsx';
import EllipsisHorizontal from '../../components/Icons/EllipsisHorizontal.tsx';

export default function Home() {
  return (
    <>
      <div class="w-full bg-amber-50">
        <div class="max-w-7xl mx-auto p-4 space-y-3">
          <h2 class="text-2xl text-amber-950 font-bold">
            继续阅读
          </h2>
          <div class="grid grid-cols-7 border-2 border-amber-950 h-80 items-center overflow-x-auto">
            <div class="col-span-3 h-[90%] border-r-2 border-amber-950 p-4 flex gap-4 items-center">
              <img src={exampleCover1} alt="封面" class="h-56 max-w-[10rem]"/>
              <div class="h-full flex flex-col justify-between">
                <div>
                  <h3 class="text-lg font-bold">
                    想要成为影之实力者 - 第6卷
                  </h3>
                  <p class="font-normal text-sm">
                    终章 那一天的香味
                  </p>
                  <div class="mt-2 text-[0.7rem] text-amber-700 max-h-[6.25rem] overflow-hidden">
                    <p>夜晚的时候，他会带着面包和肉过来，阿尔法则是会把那些做成料理。每当两人一起吃饭时，他总是会讲起各种各样的事情。</p>
                    <p>「水蒸气有着推动巨大铁块活动的力量。」</p>
                    <p>某一天，他一边吃着阿尔法做的炖菜一边说起了那样的话。面对炖菜中冒出来的水蒸气，阿尔法仔细的看了一会。</p>
                    <p>在这种微弱的热汽之中存在着那样巨大力量什么的，无论怎样也还是想象不到。</p>
                  </div>
                </div>
                <p class="w-full text-right">
                  <a class="font-bold underline underline-offset-2">
                    继续阅读
                  </a>
                </p>
              </div>
            </div>
            <div class="col-span-4 h-full gap-4 p-4 flex items-center">
              <BookHistory src={exampleCover2} bookName={"樱花庄的宠物女孩"}/>
              <BookHistory src={exampleCover2} bookName={"樱花庄的宠物女孩"}/>
              <BookHistory src={exampleCover2} bookName={"樱花庄的宠物女孩"}/>
              <BookHistory src={exampleCover2} bookName={"樱花庄的宠物女孩"}/>
              <div class="min-w-10 pr-2">
                <div class="hover:bg-amber-200 p-3 duration-200">
                  <EllipsisHorizontal/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
