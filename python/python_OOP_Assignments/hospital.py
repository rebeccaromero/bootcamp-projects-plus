class Hospital(object):
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity
        self.patients = []
        self.beds = []
        for i in range (0, capacity):
            self.beds.append(False)

    def admit(self,patient):
        if len(self.patients) < self.capacity:
            for i in range(0, self.capacity):
                if not self.beds[i]:
                    patient.bed_num = i
                    self.beds[i] = True
                    self.patients.append(patient)
                    print patient.name, "admitted", i
                    return self
        else:
            print "Hospital full"
        return self

    def discharge(self, patient):
        for i in range(0, len(self.patients)):
            if self.patients[i].name == patient:
                self.patients.pop(i) 
                self.beds[i] = False
                print patient, "discharge"
                break
        return self

class Patient(object):
    def __init__(self, ID, name, allergies):
        self.ID = ID
        self.name = name
        self.allergies = allergies
        self.bed_num = "none"

Hospital = Hospital("Sacred Heart", 8)

for i in range(0, 9):
    Hospital.admit(Patient(i, 'p' + str(i), 'something'))

Hospital.discharge("p4")

for i in range(9, 11):
    Hospital.admit(Patient(i, 'p' + str(i), 'something'))