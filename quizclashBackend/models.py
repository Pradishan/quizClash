from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager
from django.utils import timezone

# user mode manager
class UserManager(BaseUserManager):
    def create_user(self,email,password,**extra_fields):
        if not email:
            raise ValueError("The email is not given.")
        email = self.normalize_email(email)
        user = self.model(email=email,**extra_fields)
        user.is_active = True
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self,email,password,**extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)
        # extra_fields.setdefault('is_active',True)

        if not extra_fields.get('is_staff'):
            raise ValueError('Superuser must have is_staff = true')
        
        if not extra_fields.get('is_superuser'):
            raise ValueError('Superuser must have is_superuser = true')
        return self.create_user(email,password,**extra_fields)
    
    


# user model 
class User(AbstractBaseUser):
    username = models.CharField(max_length = 100,unique = True)
    email = models.EmailField(max_length = 254,unique = True)
    password = models.CharField( max_length=255,null=True)
    first_name = models.CharField(max_length = 255,null = True)
    last_name = models.CharField(max_length = 255,null = True)

    address = models.CharField(max_length = 255,null=True)
    phone = models.IntegerField()
    score = models.IntegerField(null=True,blank=True)

    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(auto_now = True)

    is_staff = models.BooleanField(default = False)
    is_superuser = models.BooleanField(default = False)
    is_active = models.BooleanField(default = True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','phone']

    objects = UserManager()

    def update_score(self, score_value):
        if self.score is None:
            self.score = score_value
        else:
            self.score += score_value
        self.save()

    def __str__(self):
        return self.email
    
    def has_module_perms(self,app_lable):
        return True
    
    def has_perm(self,perm,obj=None):
        return True
    
    # quiz model 
class Quiz(models.Model):
    name=models.CharField(max_length=200,unique=True)
    description=models.CharField(max_length=200)
    level=models.CharField(max_length=200)
    xp=models.IntegerField()
    
    def __str__(self):
        return self.name
    
    # Question model
class Question(models.Model):
    quiz= models.ForeignKey(Quiz, on_delete=models.CASCADE)
    number=models.IntegerField()
    question=models.CharField(max_length=255,unique=True)
    answer=models.CharField(max_length=200)
    option1=models.CharField(max_length=200)
    option2=models.CharField(max_length=200)
    option3=models.CharField(max_length=200)
    option4=models.CharField(max_length=200)
    
    def __str__(self):
        return self.question


    
#
    