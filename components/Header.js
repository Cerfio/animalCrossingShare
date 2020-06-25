export default function Header() {
  return (
    <div className="container">
    <style jsx>{`
      .container {
        height: 20vh;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
      }
  `}</style>
  </div>
  )
}
