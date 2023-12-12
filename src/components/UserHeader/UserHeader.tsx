import logo from "../../assets/patchoulib.svg";
import exa from "../../assets/example_avatar.jpg";
import SearchBox from './SearchBox.tsx';

export default function UserHeader() {
  return (
    <header class="w-full bg-amber-900">
      <div class="max-w-7xl w-full mx-auto px-2 py-1 gap-4 grid-cols-6 grid  items-center">
        <span class="col-span-1">
        <img src={logo} alt="不动的大图书馆" class="h-12"/>
      </span>
        <SearchBox class="col-span-3"/>
        <span class="col-start-8">
        <img src={exa} alt="头像" class="h-10 w-10 rounded-sm ml-auto"/>
      </span>
      </div>

    </header>
  );
}