import Card from "./Card"

function Wallpapers({ data, lastPost, loadMoreId, id }) {
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {data.map((post, index) =>
            (data.length === index + 1) ?
            <li key={post.id}>
              <Card wall={post} lastWall={true} loadMoreId={loadMoreId} id={id}/>
            </li> : 
            <li key={post.id}>
              <Card wall={post} lastWall={false}/>
            </li>
          )}
        </ul>
    </>
  );
}

export default Wallpapers;