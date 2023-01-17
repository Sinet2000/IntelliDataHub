namespace KnowledgeManager.API.Models;

public class KnowledgeGroup
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }
    
    public ICollection<KnowledgeGroupPage>? Pages { get; set; }
}