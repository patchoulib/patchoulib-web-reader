import { BookListItemProps } from '../../components/BookListItem/BookListItem.tsx';

export default function BookHistory(props: BookListItemProps) {
  return (
    <div class={'hover:bg-amber-200 w-11 min-w-[11rem] duration-200 p-3 h-full flex flex-col items-center space-y-2 ' + props.class}>
      <img src={props.src} alt={props.bookName} class="max-h-[13rem]"/>
      <h4 class="text-sm font-bold w-full">
        {props.bookName}
      </h4>
    </div>
  )
}