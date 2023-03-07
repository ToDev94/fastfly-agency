import React from 'react'

const Container = ({children}) => {
    const styles = {
        maxWidth:"160rem",
        margin:"auto"
    }
  return (
    <div style={styles} > {children} </div>
  )
}

export default Container