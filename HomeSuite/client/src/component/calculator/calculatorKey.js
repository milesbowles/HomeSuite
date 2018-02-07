const PointTarget = ReactPoint.PointTarget

class calculatorKey extends React.Component {
    render() {
      const { onPress, className, ...props } = this.props
      
      return (
        <PointTarget onPoint={onPress}>
          <button className={`calculator-key ${className}`} {...props}/>
        </PointTarget>
      )
    }
  }
