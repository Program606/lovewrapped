type Moment = {
  order:number,
  imageUrl: string;
  title: string;
  body: string;
  location?: string;
};

export function MomentsSingle({ moment }: { moment: Moment }) {
  return (
    <div className="flex flex-col h-full w-full px-6 pt-16 pb-10 text-white">
      <h1>{moment.title}</h1>
      <h2>{moment.location}</h2>
      <img src={moment.imageUrl} alt={moment.title} />
      <p>{moment.body}</p>
    </div>
  );
}

