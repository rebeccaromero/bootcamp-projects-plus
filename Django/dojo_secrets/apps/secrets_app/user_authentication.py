from .models import Users
import bcrypt

class UserAuthentication(object):
    def login_validator(self, email, password):
        db_password = Users.objects.filter(email = email).values_list('password')
        hashed_password = bcrypt.hashpw(password.encode(encoding='utf-8', errors='strict'), str(db_password[0][0]))
        email_exists = Users.objects.filter(email = email)
        if email_exists and hashed_password == db_password[0][0]:
            return True
        return False

    

    def authenticate(self, email = None, password = None):
        if self.login_validator(email, password) == True:
            return Users.objects.get(email= email)
        return None
    
    def get_user(user_id):
        return Users.objects.get(id=user_id)
        
        