

function Sorted({ DescendingOrder,AssecdingOrderAt, }) {

  return (
    <div>
      <div>
        <button onClick={AssecdingOrderAt}>
          <span>&#x25B2;</span>
        </button>
        <button onClick={DescendingOrder}>
          <span>&#x25BC;</span>
        </button>
      </div>
    </div>
  );
}

export default Sorted;