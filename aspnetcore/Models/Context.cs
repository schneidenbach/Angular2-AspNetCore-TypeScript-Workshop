using Microsoft.Data.Entity;

namespace StudentManager.Models {
    public class Context : DbContext {
        public DbSet<Course> Courses { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
    }
}