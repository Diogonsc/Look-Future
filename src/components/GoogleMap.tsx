import { FaMapMarkerAlt } from "react-icons/fa"
import { Button } from "./ui/button"

interface GoogleMapProps {
  address?: string
  className?: string
}

export function GoogleMap({ address = "Rua das Inovações, 123 - Centro, São Paulo, SP", className = "" }: GoogleMapProps) {
  return (
    <div className={`relative h-96 rounded-xl overflow-hidden ${className}`}>
      {/* Placeholder do mapa */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <FaMapMarkerAlt className="text-2xl text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Google Maps</h4>
            <p className="text-muted-foreground text-sm">
              {address}
            </p>
          </div>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              const encodedAddress = encodeURIComponent(address)
              window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
            }}
          >
            Ver no Google Maps
          </Button>
        </div>
      </div>
      
      {/* Overlay com informações */}
      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-primary" />
          <span className="text-sm font-medium text-foreground">Look Future</span>
        </div>
      </div>
    </div>
  )
}
