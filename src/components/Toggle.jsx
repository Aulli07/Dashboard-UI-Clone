function Toggle ({toggleWord, value, setToggle}) {
  // const [securityToggle, setSecurityToggle] = useState({
  //   authentication: false
  // })

  function handleToggle(key) {
    setToggle( prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }

  return (
    <div
      className={`toggle ${value ? "active" : ""}`}
      onClick={() => handleToggle(toggleWord)}
    >
      <div className="handle"></div>
    </div>
  )
}

export default Toggle