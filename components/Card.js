export default function Card(props) {
    return (
      <div className="card">
        <img className="card__image" src={props.image}></img>
        <p>{props.title ? props.title : "defaultTitle"}</p>
        <p>by {props.author ? props.author : "unknow"}</p>
        <style jsx>{`
          .card {

          }
          .card__image {
            object-fit: cover;
            width: 200px;
            height: 200px;
          }
        `}</style>
      </div>
    )
  }
  