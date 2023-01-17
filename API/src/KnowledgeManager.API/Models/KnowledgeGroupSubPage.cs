namespace KnowledgeManager.API.Models;

public class KnowledgeGroupSubPage
{
    public int Id { get; set; }

    public int KnowledgeGroupPageId { get; set; }
    public KnowledgeGroupPage KnowledgeGroupPage { get; set; } = null!;

    public string Name { get; set; } = string.Empty;

    public string Text { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }
}