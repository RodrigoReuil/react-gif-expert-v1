//paso 4-2
export const GifItem = ({ title, url, id}) => (// se puede sacar el "{ return (...) }" ya q no se hace otras cosas antes
  <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
  </div>
)