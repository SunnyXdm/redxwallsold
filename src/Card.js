// id={item.data.id}
// title={item.data.title}
// url={item.data.url}
// author={item.data.author}
// small_img={parent_img}
// ups={item.data.ups}item.data.preview.images[0].resolutions[3].url
// permalink={item.data.permalink}

function Card({wall}) {
  console.log(wall);
  return (
    <div className="">
      <img className="object-cover object-center h-full w-full" src={`${wall.preview}`} alt=""></img>
      <div>
        <div class="text-lg select-none text-black">Angry Bird</div>
      </div>
    </div>
  );
}

export default Card;
