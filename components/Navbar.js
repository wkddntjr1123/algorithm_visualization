import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav_container">
        <li className="nav_item">
          <a href="/">Home</a>
        </li>
        <li className="nav_item">
          <a href="/selection-sort">선택정렬</a>
        </li>
        <li className="nav_item">
          <a href="/bubble-sort">버블정렬</a>
        </li>
        <li className="nav_item">
          <a href="/insertion-sort">삽입정렬</a>
        </li>
        <li className="nav_item">
          <a href="/merge-sort">병합정렬</a>
        </li>
        <li className="nav_item">
          <a href="/quick-sort">퀵정렬</a>
        </li>{" "}
        <span className="myself">201515300 장우석</span>
      </ul>
      <style jsx>
        {`
          .nav_container {
            display: flex;
            flex-direction: row;
            width: 100%;
            margin: 0;
            padding: 0;
            background-color: #767676;
            list-style: none;
          }

          .nav_item {
            padding: 0;
            cursor: pointer;
          }
          .nav_item:hover {
            background-color: #6b7cab;
            transition: 0.7s;
          }

          .nav_item a {
            padding: 30px;
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            text-decoration: none;
            color: white;
          }
          .myself {
            display: inline-block;
            font-weight: bold;
            color: #c8c8f3;
            font-size: 23px;
            position: absolute;
            left: 77%;
            top: 2.4%;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
