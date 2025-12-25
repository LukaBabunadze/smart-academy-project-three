import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h1>არსებული მისამართი ვერ მოიძებნა</h1>
      <Link href={"/"}> {"<-"}მთავარ გვერდზე დაბრუნება</Link>
    </div>
  );
}

export default NotFound;
