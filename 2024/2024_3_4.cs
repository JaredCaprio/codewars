/* https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19/train/csharp

Fun with ES6 Classes #1 - People, people, people

Time for some OOP fun!

Define a class Person with the following properties:

    A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set),
     lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender
      (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, 
      this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
    A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
    A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter
     raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians",
      it should say "Welcome to Planet Earth Martians"

You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using 
ES6 syntax and features.

Have fun! :D

 */

public class Person
{
  public string FirstName { get; set; } = "John"
  public string LastName { get; set; } = "Doe"
  public int Age { get; set; } = 0
  public string Gender { get; set; } "Male"

  public Person(string firstName = null, string lastName = null, int age = 0, string gender = null)
  {
    FirstName = firstName ?? FirstName;
    LastName = lastName ?? LastName;
    Age = age;
    Gender = gender ?? Gender;
  }

  public static string SayFullName(string fullName)
  {
    return $"{FirstName} {LastName}"
    }

  public static string GreetExtraTerrestrials(string raceName)
  {
    return $"Welcome to Planet Earth, {raceName}!";
  }

  static void Main(string[] args)
  {
    Person John = new Person("John", "Doe", 0, "Male");
  }
}

