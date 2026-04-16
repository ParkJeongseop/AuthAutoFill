.class Landroidx/appcompat/view/menu/b$d;
.super Ljava/lang/Object;
.source "SourceFile"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/appcompat/view/menu/b;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "d"
.end annotation


# instance fields
.field public final a:Landroidx/appcompat/widget/y;

.field public final b:Landroidx/appcompat/view/menu/d;

.field public final c:I


# direct methods
.method public constructor <init>(Landroidx/appcompat/widget/y;Landroidx/appcompat/view/menu/d;I)V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/appcompat/view/menu/b$d;->a:Landroidx/appcompat/widget/y;

    iput-object p2, p0, Landroidx/appcompat/view/menu/b$d;->b:Landroidx/appcompat/view/menu/d;

    iput p3, p0, Landroidx/appcompat/view/menu/b$d;->c:I

    return-void
.end method


# virtual methods
.method public a()Landroid/widget/ListView;
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/b$d;->a:Landroidx/appcompat/widget/y;

    invoke-virtual {v0}, Landroidx/appcompat/widget/w;->c()Landroid/widget/ListView;

    move-result-object v0

    return-object v0
.end method
