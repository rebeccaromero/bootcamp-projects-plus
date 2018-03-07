class Call(object):
    def __init__(self, u_id, caller_name, caller_ph_num, time, reason):
        self.u_id = u_id
        self.caller_name = caller_name
        self.caller_ph_num = caller_ph_num
        self.time = time
        self.reason = reason
        Data = [self.u_id, self.caller_name, self.caller_ph_num, self.time, self.reason]
        Input = ["Unique ID", "Caller Name", "Caller #", "Time of call", "Reason for call"]
        self.caller_info = dict(zip(Input, Data))

    def display(self):
        print "Unique ID:", self.u_id 
        print "Caller Name:", self.caller_name
        print "Caller #:", self.caller_ph_num
        print "Time of call:", self.time
        print "Reason for call:", self.reason

class Call_center(object):
    def __init__(self):
        self.calls = []
        self.queue_size = 0

    def add(self, new_call):
        self.calls.append(new_call.caller_info)
        self.queue_size = len(self.calls)
        return self
        #print self.calls
        #print self.queue_size

    def remove(self):
        del self.calls[0]
        self.queue_size = len(self.calls)
        return self

    def choose_remove(self, phone_num):
        for callers in range(0, len(self.calls)):
            if self.calls[callers]["Caller #"] == phone_num: #phone_num in self.calls[callers].itervalues():
                del self.calls[callers]
                break
        self.queue_size = len(self.calls)
        return self
            #== self.calls[callers]["Caller Name"]

    def info(self):
        for callers in range(0, len(self.calls)):
            print self.calls[callers]["Caller Name"]
            print self.calls[callers]["Caller #"]
        print self.queue_size

new_call1 = Call("ggg", "Gigi Cat", "619-555-5555", "4:35pm", "Needs feeding and pets")
new_call2 = Call("ppp", "Pepper Cat", "619-555-5550", "8:12pm", "Needs all the food and no back pets")

Call_center = Call_center()

Call_center.add(new_call1).add(new_call2).info()

Call_center.choose_remove("619-555-5555").info()