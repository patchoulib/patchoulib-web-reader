import SearchIcon from '../Icons/SearchIcon.tsx';
import { createSignal } from 'solid-js';


export default function SearchBox(props:{ class?: string }) {
  const [searchText, setSearchText] = createSignal('');
  return (
    <div class={'flex items-center h-8 border-amber-950 border ' + props.class}>
      <input
        value={searchText()}
        class="py-0.5 px-1 h-full min-w-60 w-full text-sm"
        onInput={(e) => setSearchText(e.currentTarget.value)}
      />
      <button class="px-2 bg-amber-700 h-full hover:bg-amber-600 duration-200">
        <SearchIcon class="h-4 text-amber-50"/>
      </button>
    </div>
  );
}