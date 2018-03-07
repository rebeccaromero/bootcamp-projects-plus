class Product(object):

    def __init__(self, price, item_name, weight, brand, cost):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "for sale"

    def sell(self):
        self.status = "sold"
        return self
    
    def add_tax(self,tax):
        self.price = self.price + self.price * tax
        return self

    def Return(self, reason, box_status):
        if reason == "defective":
            self.status = "defective"
            self.price = 0
        else:
            if box_status == "in box, like new":
                self.status = "for sale"
            elif box_status == "opened":
                self.status = "used"
                self.price = self.price - self.price *.20
        return self

    def display_info(self):
        print "Price: $", self.price
        print "Product Name:", self.item_name
        print "Weight:", self.weight, "lbs"
        print "Brand:", self.brand
        print "Wholesale Cost: $", self.cost
        print "Status:", self.status


product1 = Product(50, "hair dryer", 1, "Revlon", 10)

product1.add_tax(.15).sell().display_info()

