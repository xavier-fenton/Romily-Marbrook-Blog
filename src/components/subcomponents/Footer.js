import React from 'react'
import '../../css/footer.scss'
const Footer = () => {
  return (
    <div className="footer-component">
      <div className="footer-dataline">
        <p className="footer-content">Name</p>
        <p className="footer-content">Romily Marbrook</p>
      </div>
      <div className="footer-dataline">
        <p className="footer-content">Phone</p>
        <p className="footer-content">023 23123 323</p>
      </div>
      <div className="footer-dataline">
        <p className="footer-content">Email</p>
        <p className="footer-content">romily@gmail.com</p>
      </div>
      <div className="footer-dataline">
        <p className="footer-content">Instagram</p>
        <p className="footer-content">@rom1ly</p>
        {/* could possibly have instagram handle changable with changing data via cms*/}
      </div>
    </div>
  )
}

export default Footer
