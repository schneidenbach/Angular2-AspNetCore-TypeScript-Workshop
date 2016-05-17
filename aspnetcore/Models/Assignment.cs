namespace Angular2.Models {
    public class Assignment {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Points { get; set; }
        public virtual Course Course { get; set; }
    }
}  