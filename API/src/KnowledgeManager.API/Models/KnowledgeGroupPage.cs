namespace KnowledgeManager.API.Models;

public class KnowledgeGroupPage
{
    public int Id { get; set; }

    public int KnowledgeGroupId { get; set; }
    public KnowledgeGroup KnowledgeGroup { get; set; } = null!;

    public string Name { get; set; } = string.Empty;

    public string Text { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }
    
    public ICollection<KnowledgeGroupSubPage>? SubPages { get; set; }
}