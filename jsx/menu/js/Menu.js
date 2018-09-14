const Menu = function ({items, opened}) {
    const dropDownmenu = items.map( (item, index) => <li key={index}><a href={item.href}>{item.title}</a></li> );
    return(
      <div className={"menu" + (opened ? " menu-open" : "")}>
          <div className="menu-toggle"><span></span></div>
          {opened && (
              <nav>
                  <ul>
                      {dropDownmenu}
                  </ul>
              </nav>
          )}
      </div>
  );
};

