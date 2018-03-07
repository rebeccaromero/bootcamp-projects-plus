class Car(object):

    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = .15
        else: self.tax = .12
        def display_all(self):
            print "Price:", self.price
            print "Speed:", self.speed, "mph"
            print "Fuel", self.fuel
            print "Mileage", self.mileage, "mpg"
            print "Tax:", self.tax
        display_all(self)

car1 = Car(15000, 45, "half-full", 30)
car2 = Car(8000, 25, "full", 25)
car3 = Car(1500, 5, "empty", 10)
car4 = Car(25000, 65, "full", 45)
car5 = Car(9999, 35, "quarter-full", 40)
car6 = Car(5000, 30, "half-full", 15)



